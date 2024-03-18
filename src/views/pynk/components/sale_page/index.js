import * as React from "react";
import { useLocation } from "react-router-dom";

export default function SalePageComponents() {
  const params = useLocation();
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    const linkMap = {
      "?link=fitto": "",
      "?link=bebe":
        "https://bebefitroutine.com/beginnerprogram/?fbclid=IwAR0FZ9Pb3aSEI-4nLp_VLnpOWSqhAAwwm7yzeE-eW-PBNlsMdRUR3hUtiCw",
      "?link=7day": "https://bebefitroutine.com/sevendaywithpilatesring/",
      "?link=getfit": "https://carrot.pynk.co/",
      "?link=bettershape": "https://preem.pynk.co",
    };

    if (linkMap.hasOwnProperty(params.search)) {
      setLink(linkMap[params.search]);
    }
  }, [params]);

  return (
    <div>
      <iframe
        src={link}
        title="Preem Pynk"
        style={{
          minHeight: "100vh",
          width: "100%",
        }}
        // scrolling="no"
      ></iframe>
    </div>
  );
}
