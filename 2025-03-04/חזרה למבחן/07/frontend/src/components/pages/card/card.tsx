import Employee from "../../../models/employee/employee";
import "./Card.css";

interface CardProps {
  employee: Employee;
}

export default function Card(props: CardProps): JSX.Element {
  const { lastName, address, employeeDate, firstName } = props.employee;
  const { name } = props.employee.job;

  return (
    <div className="Card">
      <h4>first name:{firstName}</h4>
      <p>last name: {lastName}</p>
      <p>employment Date: {new Date(employeeDate).toLocaleDateString()}</p>
      <p>address: {address}</p>
      <p>job: {name}</p>
    </div>
  );
}
