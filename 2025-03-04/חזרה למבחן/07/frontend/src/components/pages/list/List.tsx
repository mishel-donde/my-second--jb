import { ChangeEvent, useEffect, useState } from "react";
import "./List.css";
import Employee from "../../../models/employee/employee";
import Job from "../../../models/job/job";
import jobsService from "../../../services/jobs";
import employeesService from "../../../services/employees";
import Card from "../card/card";

export default function List(): JSX.Element {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const jobsFromService = await jobsService.getAll();
        setJobs(jobsFromService);
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  async function jobChanged(event: ChangeEvent<HTMLSelectElement>) {
    const jobId = event.currentTarget.value;
    const currentJob = await employeesService.getPerJob(jobId);
    setEmployees(currentJob);
  }

  return (
    <div className="List">
      <div className="jobsSelection">
        <select onChange={jobChanged}>
          <option value="" disabled selected>
            please select category...
          </option>
          {jobs.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {employees.map((e) => (
          <Card employee={e} />
        ))}
      </div>
    </div>
  );
}
