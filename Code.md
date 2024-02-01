// function clicked() {
//   let uname = document.getElementById("textname");

//   if (uname.value === "") {
//     alert("Please enter username");
//   } else {
//     alert(`Welcome back ${uname.value}!!`);
//   }
//   return;
// }
// function User() {
//   return (
//     <>
//       <h1>Hello User</h1>
//       <label>Enter Your Name Here:</label>
//       <textarea placeholder="Enter your name Here" id="textname"></textarea>

//       <button onClick={clicked}>CLick Here</button>
//     </>
//   );
// }
// ----------------------------------------

**useState hook
 <!-- const state = useState(); -->
  const [count, setCount] = useState(40);

  const IncNum = () => {
    setCount(count - 1); // 2nd parameter(updated value) setCount j aaya lakhvi
  };

  **********
  function App() {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(0);
  const [input, setInput] = useState("")

  return (
    <>
      <h1>{count}</h1>
      <p>{multi}</p>
      <input type="text" name="city" onChange={(e)=>setInput(e.target.value)} /> // get value from useState
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );

************* useEfect ********************
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(0);
  const [input,setInput] = useState("")
  useEffect(() => {
    const multi = count * 2;
    setMulti(multi);
  }, [count]);  //jyare jyare count vali dependency change thay tyare useEffect run thase. jo dependency no aapi hoi to ek j vaar run thay


********************************************
function App() {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(1);

  useEffect(() => {
    console.log("heyy");
    // console.log("hello");
  }, [count]);

  useEffect(()=>{
    console.log("Hello")
  }, [multi])
  return (
    <>
      <h1> {count} </h1>
      <p>{multi}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          // setMulti(multi * 2);
        }}
      >
        click Here
      </button>
      <button
        onClick={() => {
          setMulti(multi * 2);
        }}
      >
        click
      </button>
    </>
  );

  ********************Window Size*************************
  //window size

const ClearUp = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const currWindowSize = () => {
    setWidthCount(() => window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", currWindowSize);
    window.removeEventListener("resize", currWindowSize);
  });
  return (
    <>
      <div className="container">
        <h2>
          The size of window is: <span> {widthCount} </span>
        </h2>
      </div>
    </>
  );
};
************useRef***************
const Ref = () => {
  const [myData, setMyData] = useState("");
  //   const [count, setCount] = useState("");
  const renderTime = useRef(0);
  console.log(renderTime.current);

  useEffect(() => {
    renderTime.current = renderTime.current + 1;
  });

  return (
    <div>
      <h1> Type Something... </h1>
      <input
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <p>Number of Times render:{renderTime.current}</p>

    </div>
  );
};
************

**Toggle Button
const [status, setStatus] = React.useState(true);
  return (
    <>
      {/* <User /> */}
      <div className="">{status ? <h1>Hello World</h1> : ""}</div>
      <button onClick={() => setStatus(!status)}>
        Toggle
        {/* {status ? "Toggle" : "Toggle"} */}
      </button>
    </>
  );

** Reflecting the input text on the display without button
function User() {
  const [Data, setData] = useState();
  function getData(ip) {
    console.warn(ip.target.value);
    setData(ip.target.value);
  }

  return (
    <>
      <div className="inputC">
        <h1>Get Your Data from here</h1>
        <h2>{Data}</h2>
        <input type="text" onChange={getData}></input>
      </div>
    </>
  );
}
** useRef - DOM ne access karva mate
const User = () => {
  let inputRef = useRef(null);
  function handleInput() {
    console.warn("clicked");
  }
  return (
    <>
      <h1>useRef Use</h1>
      <input type="text" />
      <button onClick={handleInput}>Handle Input</button>
    </>
  );
};

** useMemo - unwanted calls ne save karva.  when you have expensive computations that need to be memoized. System's performance increses

******************************
const MemoComp = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrTwo = () => {
    setCounterTwo(counterTwo + 2);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  useEffect(() => {
    console.log("One Incremented!!");
  }, [counterOne]);
  useEffect(() => {
    console.log("Two Incremented!!");
  }, [counterTwo]);

  return (
    <div>
      <div>
        <button onClick={incrOne}>CLick - {counterOne}</button>
        <span>{isEven ? "even" : "odd"}</span>
      </div>
      <div>
        <button onClick={incrTwo}>CLick - {counterTwo}</button>
      </div>
    </div>
  );
};

******************************

The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

**Control and Uncontrolled Component 
useState na use thi thay, to Controlled natar Uncontrolled.

**HOC 
Ek component bija component ne props tarike lai ne use kare. increase reusability

*************************Controlled Component***************************
Input element values which are controlled by React

************************userContext***************************
import CompC from "./component/useContext.js/CompC";
import {createContext} from "./component/useContext";
export const UserContext = createContext();

function App() {
  return (
    <>
      <UserContext.Provider>
        <CompC />
      </UserContext.Provider>
    </>
  );
}
***********************
export const FirstName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"Dharmik"}>
      <LastName.Provider value={"Vaja"}>
        <CompC />
      </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}
****CompC
import { FirstName } from "../../App";

const CompC = () => {
  return (
    <div>
      <FirstName.Consumer>    // consumer only wants a function within it
        {/* Hello World from CompC */}
        {(fname) => {
          return <h1>my name is {fname}</h1>;
        }}
      </FirstName.Consumer>
    </div>
  );
};
****************Callback hell*******************
<FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    My full name is {fname} {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
</FirstName.Consumer>  

*********for overcoming Consumer hell problem, use useContext*******
const CompC = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
      <h1>
        My full name is {fname} {lname}
      </h1>
  );
};

***************Index.js******************
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

****************(1) API call by fetch**************************
import React, { useEffect } from "react";

// Using Fetch
const CompApi1 = () => {
  let API = "http://hn.algolia.com/api/v1/search?query=html";
  const fetchAPIData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("data::::", data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAPIData(API);
  });
  return (
    <div>
      <h3> Hello, Here you can have latest</h3>
      <h4> Tech news </h4>
    </div>
  );
};

export default CompApi1;

**************(2) API call by Axios promise****************
const CompAPI2 = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://jsonplaceholder.typicode.com/posts"
        );
        setMyData(response.data);
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="wholePage">
        <h2>call API by axios promise </h2>
      </div>
      {myData.map((post) => {
        const { id, title, body } = post;
        return (
          <div className="apiData" key={id}>
            <h3>{title.slice(0, 12)}</h3>
            <p>{body}</p>
          </div>
        );
      })}
    </>
  );
};

