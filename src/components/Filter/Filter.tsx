import  {Input} from 'antd'
import { FilterProps } from "./types"
import styles from './Filter.module.scss'


const Filter = ({total, setFilter}: FilterProps) => {
  return (
    <div className={styles.row}>
      <div className={styles.totalContainer}>
        <h4 className={styles.text}>{total}</h4>
      </div>
      <div>
        <Input
          onChange={(event) => {
            setFilter(event.target.value)
          }}
          placeholder='Filter podcats...'
        />
      </div>
    </div>
  )
}

export default Filter;