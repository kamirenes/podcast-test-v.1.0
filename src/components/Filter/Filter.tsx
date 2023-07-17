import  {Input} from 'antd'
import { FilterProps } from "./types";

const Filter = ({total, setFilter}: FilterProps) => {
  let filter = ''

  return (
    <div>
      <div>
        <h4>{total}</h4>
      </div>
      <div>
        <Input onChange={(event) => {
          setFilter(event.target.value)
          filter= event.target.value
        }}/>
      </div>
    </div>
  )
}

export default Filter;