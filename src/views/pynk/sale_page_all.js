import * as React from "react";
import { useLocation } from "react-router-dom";
import FooterPynk from "../../pynk_header_footer/footer";

export default function SalePageAll() {
  const params = useLocation();
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    window.scrollTo(0, 0);
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

    // if (params.pathname == "/sale-page") {
    //   document.body.classList.add("hide-scrollbar");
    // }
    // return () => {
    //   document.body.classList.remove("hide-scrollbar");
    // };
  }, [params]);

  return (
    <div class="iframe-container">
      <iframe
        src={link}
        className="scrollable-content"
        title="Preem Pynk"
        style={{
          height: "100vh",
          width: "100%",
        }}
      ></iframe>

      <FooterPynk />
    </div>
  );
}
