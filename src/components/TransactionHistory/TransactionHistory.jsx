import s from './TransactionHistory.module.css';


function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr className={s.tableHeadRow}>
          <th className={s.tableHeadRowItem}>Type</th>
          <th className={s.tableHeadRowItem}>Amount</th>
          <th className={s.tableHeadRowItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tableBody}>
        {items.map(item => {
          return (
            <tr className={s.tableBodyRow} key={item.id} >
              <td className={s.tableBodyRowItem}>{item.type}</td>
              <td className={s.tableBodyRowItem}>{item.amount}</td>
              <td className={s.tableBodyRowItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
