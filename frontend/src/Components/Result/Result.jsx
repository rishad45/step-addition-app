import './result.css'

const Result = ({result}) => {
  return (
    <div className='result'>
        {
            result.map((item, i) => {
                return <p key={i}>{item} ,</p>
            })
        }
    </div>
  )
}

export default Result