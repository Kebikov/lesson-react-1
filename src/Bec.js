// import { useState, useMemo } from 'react';


// const MyComponent = () => {
//   const [num, setNum] = useState(0);
  
//   const getFactorial = val => {
//     console.log('getFactorial');
//     if (val === 0) return 1;
//     return val * getFactorial(val - 1);
//   };
  
//   const calculatedFactorial = useMemo(() => {
//     console.log('calculatedFactorial');
//     return num ? getFactorial(num) : 0;
//   }, [num]);
  
//   return (
//     <div>
//       <section className="box">
//         <div>Enter a number:</div>
//         <input value={num} onChange={(e) =>
//           setNum(e.target.value)}
//         />
//       </section>
//       <div className="box">Factorial: {calculatedFactorial}</div>
//     </div>
//   );
// }

// export { MyComponent };