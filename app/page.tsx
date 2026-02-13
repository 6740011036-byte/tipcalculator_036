"use client"
import { useState } from "react"


interface LeftPanelProps {
  calculate: (bill: string, tip: number) => void
}

interface RightPanelProps {
  tipAmount: number
  totalBill: number
}


const LeftPanel = ({ calculate }: LeftPanelProps) => {
  const [bill, setBill] = useState("")
  const [tip, setTip] = useState(0)

  const handleCalculate = () => {
    calculate(bill, tip)
  }

  return (
    <div className="border-2">

      <div >
        <label>Bill Amount:</label>
        <input className="border-2 rounded-2xl"
          type="number"
          value={bill}
          onChange={(event) => setBill(event.target.value)}
        />
      </div>

      <div>
        <p>Select Tip:</p>

        <button className="border-2 rounded-2xl" onClick={() => setTip(tip === 5 ? 0 : 5)}>
          5%
        </button>
        <button className="border-2 rounded-2xl" onClick={() => setTip(tip === 10 ? 0 : 10)}>
          10%
        </button>
        <button className="border-2 rounded-2xl" onClick={() => setTip(tip === 15 ? 0 : 15)}>
          15%
        </button>
        <button className="border-2 rounded-2xl" onClick={() => setTip(tip === 20 ? 0 : 20)}>
          20%
        </button>

        <p>Selected Tip: {tip}%</p>
      </div>

      <button className="border-2 rounded-2xl" onClick={handleCalculate}>
        Calculate
      </button>
    </div>
  )
}

const RightPanel = ({ tipAmount, totalBill }: RightPanelProps) => {
  return (
    <div className="border-2">

      <p>Tip Total: {tipAmount}</p>
      <p>Bill Total: {totalBill}</p>
    </div>
  )
}

const Tipcal = () => {
  const [tipAmount, setTipAmount] = useState(0)
  const [totalBill, setTotalBill] = useState(0)

  const calculate = (bill: string, tip: number) => {
    const billNumber = parseFloat(bill) || 0
    const tipValue = billNumber * (tip / 100)
    const totalValue = billNumber + tipValue

    setTipAmount(tipValue)
    setTotalBill(totalValue)
  }

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <LeftPanel calculate={calculate} />
      <RightPanel tipAmount={tipAmount} totalBill={totalBill} />
    </div>
  )
}

export default Tipcal
