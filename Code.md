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
 const state = useState();
  const [count, setCount] = useState(40);

  const IncNum = () => {
    setCount(count - 1); // 2nd parameter(updated value) setCount j aaya lakhvi
  };

  **********
  function App() {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(0);
  const [input,setInput] = useState("")

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
  }, [count]);  //jyare jyare count argument change thay tyare useEffect run thase. jo argument no aapi hoi to ek j vaar run thay


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
***************************

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

Jya Ref/ DOM use thai e component ne uncontrolled component kevai

**HOC 

