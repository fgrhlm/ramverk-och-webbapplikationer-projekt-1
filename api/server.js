import express from "express";
import helmet from "helmet";
import compression from "compression";
import axios from "axios";

import moment from "moment";

const app = express();

const fetchData = async () => {
    // kumpulan kampus id: 1240418
    const payload = {"query": `{
        stop(id: "HSL:1240418") {
          name
            stoptimesWithoutPatterns {
            realtimeDeparture
            trip {
                route {
                  shortName
                }
              }
            headsign
          }
        }
      }`
    }

    const opts = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        data: payload,
        url: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
        json: true
    }

    const response = await axios(opts);
    const ret_obj = {
        "stopTimes": []
    }

    response.data["data"]["stop"]["stoptimesWithoutPatterns"].forEach((s) => {
        const departureTime = moment();
        departureTime.hour(0);
        departureTime.minute(0)
        departureTime.second(0)

        departureTime.add(s["realtimeDeparture"], "seconds");

        // Väldigt tydligt
        const routeLengthArcadaToKumpulanKampus = 6 * 60;
        const leaveAt = moment(departureTime);
        
        leaveAt.subtract(routeLengthArcadaToKumpulanKampus,"seconds");

        const departureObj = {
            "name": s["headsign"],
            "line": s["trip"]["route"]["shortName"],
            "departs": departureTime.format("HH:mm:ss"),
            "leaveAt": leaveAt.format("HH:mm:ss"),
        }

        ret_obj.stopTimes.push(departureObj);
    })

    return ret_obj;
}

// Express
app.use(helmet());
app.use(compression())

app.get("/",async (req,res) => {
    // Get hsl data
    const data = await fetchData();
    
    res.header("Access-Control-Allow-Origin", "*");
    res.json(data);
});

app.listen(8080, () => {
    console.log("listening");
});