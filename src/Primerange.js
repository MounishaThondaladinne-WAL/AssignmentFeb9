import { useState } from "react";
function Primerange() {
    let [primeNmbrs, setNmbr] = useState("");
    let[Sum,setSum]=useState("")
    function Primesrange(event) {
        event.preventDefault();
        let formTag = event.target;
        let minVal= parseInt(formTag.Numbr1.value);
        let maxVal = parseInt(formTag.Numbr2.value)
        let x= "";
        let y=0;
        for (let i = minVal; i <= maxVal; i++) {
            let flag= 0;
            
            for (let j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    flag= 1;
                    break;
                }
            }
            if (flag== 0) {
                x = x + i + ", "
                y=y+Number(i);
            }

        }
        setNmbr(x);
        setSum(y);

    }
    return (
        <div>
            <form onSubmit={Primesrange}>
                <div><h1>Prime Numbers in range are: {primeNmbrs}</h1> <h1>sum of Prime Numbers: {Sum}</h1></div>
                <input type="number" name="Numbr1" placeholder=" Enter Min Val" />
                <input type="number" name="Numbr2" placeholder=" Enter Max Val" />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Primerange;