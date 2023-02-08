import './result.css'

const Result = ({sum, carry}) => {
  return (
    <div className='result'>
        {
            sum.map((s, i) => {
                return <p> 'step {i + 1} ' :  sum string is " {s} " and carry string is " {carry[i]}_"</p>
            })
        }
    </div>
  )
}

export default Result