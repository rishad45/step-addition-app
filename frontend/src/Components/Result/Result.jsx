import './result.css'

const Result = ({sum, carry}) => {
  return (
    <div className='result'>
        {
            sum.map((s, i) => {
                return <p> "step {i + 1}" : carry string is " {carry[i]}_" and sum string is " {s} "</p>
            })
        }
    </div>
  )
}

export default Result