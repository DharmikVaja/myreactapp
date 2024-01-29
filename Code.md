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

** useRef - DOM ne access karva mate
** useMemo - unwanted calls ne save karva.  when you have expensive computations that need to be memoized. System's performance increses



