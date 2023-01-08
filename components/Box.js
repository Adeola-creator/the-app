import Card from './Card';
import { capitalize } from 'lodash';
import Link from 'next/link';


function Box(props) {
  return (
    <div className='grid gap-4 grid-cols-6 p-5 justify-center items-center'>
    {(props.data).map((patient, index) => 
      <Card 
      key={index}
      initial= {patient.firstName[0].toUpperCase()} 
      firstName= {capitalize(patient.firstName)}
      lastName={capitalize(patient.lastName)}
      department={patient.department}
      lastVisit={patient.lastVisit}
      id={patient._id}
       >
         <p className="text-sm py-1"><span className="font-medium">Last Visit:</span>{patient.lastVisit}</p>
            <hr className="w-20 h-0.5 m-1 bg-[#007560] border border-[#007560] rounded-md"/>
            <div>
            <Link href={{
                pathname: `/patients/${encodeURIComponent(patient._id)}`}} className="py-1 px-5 mt-20 text-xs font-bold text-white bg-[#007560] rounded">More</Link>
            </div>
            </Card>)}
    </div>
  )
}

export default Box