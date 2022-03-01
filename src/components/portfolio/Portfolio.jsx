import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  python,
  javascript,
  sql,
  linux,
  aws,
  university,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("python");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "python",
      title: "Python",
    },
    {
      id: "javascript",
      title: "Javascript",
    },
    {
      id: "sql",
      title: "SQL",
    },
    {
      id: "linux",
      title: "Linux",
    },
    {
      id: "aws",
      title: "AWS web services",
    },
    {
      id: "university",
      title: "Courses",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "python":
        setData(python);
        break;
      case "javascript":
        setData(javascript);
        break;
      case "sql":
        setData(sql);
        break;
      case "linux":
        setData(linux);
        break;
      case "aws":
        setData(aws);
        break;
      case "university":
        setData(university);
        break;  
      default:
        setData(python);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
