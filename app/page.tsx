"use client";
import { useState } from "react";

const Tipcal = () => {
  const [bill, setBill] = useState(""); 
  const [tip, setTip] = useState(0); 
  const [tipAmount, setTipAmount]= useState(0); 
  const [totalBill, setTotalBill]= useState(0); 

  const calculate = () => {
      const billNumber = parseFloat(bill) 
      const tipValue = billNumber * (tip / 100) 
      const totalValue = billNumber + tipValue 
      
      setTipAmount(tipValue) 
      setTotalBill(totalValue) 
      
  }

  return(
    <div className="w-full min-h-screen justify-center p-6">

      <div className="w-full mx-auto space-y-8"></div>


    <div className="w-full bg-white rounded-3xl shadow-xl p-4 mb-8">

      <h1 className="text-4xl font-bold text-center text-slate-800 mb-10">
        Tip Calculator</h1>
      </div>

      

        <div className="space-y-6">
        
        <div className="w-full mb-10">  

          <label className="block text-lg font-semibold text-slate-600 mb-2">Bill Amount
          </label>
          <input type="number"

          value={bill}

             onChange={(x) => setBill(x.target.value)} //  onchange ทำงานเมื่อ input เปลี่ยน / e คือตัวแปรเหตุการณ์ ,target ตัวที่ถูกพิมพ์, value ค่าปัจจุบันในช่อง

          placeholder="Enter Bill Amount"
          
          className="text-xl lg:w-full w-full rounded-xl border border-slate-300 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"    

          />
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold text-slate-600 mb-4">Select Tip %
        </p>

        <div className="grid grid-cols-1 gap-4 mb-4">
 
          <button onClick={() => setTip(tip === 5 ? 0 : 5)} //  ถ้า tip เท่ากับ 5  ใช้ค่า 0 ถ้า tip ไม่เท่ากับ 5  ใช้ค่า 5

          className={`rounded-2xl bg-indigo-100 hover:bg-indigo-300 hover:text-white transition text-lg p-4 font-semibold 
            ${tip === 5 ? "bg-indigo-300 text-white" : "bg-indigo-100"}`}>
              5%
              </button>
        </div>
      </div>

     <button onClick={calculate}

     className="text-2xl text-white font-bold bg-indigo-500 hover:bg-indigo-600 w-full rounded-2xl py-4 transition"

     >Calculate
     </button>
      
      <div className="space-y-8">

      <div className="rounded-2xl bg-slate-50 p-6">

       <p className="text-lg font-semibold text-slate-500 mb-2">
        Tip Total</p>

       <p className="text-4xl font-bold text-slate-500 mb-2">฿{tipAmount}</p>

       </div>
    </div>

      <div className="rounded-2xl p-6 bg-indigo-50">

       <p className=" text-lg font-semibold text-indigo-500 mb-2 ">Bill Total</p>

       <p className="text-5xl font-bold text-indigo-600">฿
        {totalBill}</p>

        </div>
    </div>
  )

}
export default Tipcal;
