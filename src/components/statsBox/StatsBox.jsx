import './statsBox.scss';

const data = [
  {
    tNumber: '0-14',
    task: 'iPhone 6 plus home button',
    time: '10 Aug 2018',
    assignTo: 'Jack Anderson',
    customer: 'Mike John',
    status: 'In Progress',
  },
  {
    tNumber: '0-14',
    task: 'iPhone 6 plus home button',
    time: '10 Aug 2018',
    assignTo: 'Jack Anderson',
    customer: 'Mike John',
    status: 'In Progress',
  },
  {
    tNumber: '0-14',
    task: 'iPhone 6 plus home button',
    time: '10 Aug 2018',
    assignTo: 'Jack Anderson',
    customer: 'Mike John',
    status: 'In Progress',
  },
  {
    tNumber: '0-14',
    task: 'iPhone 6 plus home button',
    time: '10 Aug 2018',
    assignTo: 'Jack Anderson',
    customer: 'Mike John',
    status: 'In Progress',
  },
];

const StatsBox = () => {
  return (
    <div className="table">
      <table style={{ width: '100%' }}>
        <tr>
          <th>Ticket #</th>
          <th>Task</th>
          <th>Pick up time</th>
          <th>Assign To</th>
          <th>Customer</th>
          <th>Status</th>
        </tr>
        {data.map((elem, index) => (
          <tr key={index}>
            <td className="ticket">{elem.tNumber}</td>
            <td className="task">{elem.task}</td>
            <td>{elem.time}</td>
            <td>{elem.assignTo}</td>
            <td>{elem.customer}</td>
            <td className="status">
              <span>{elem.status}</span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default StatsBox;
