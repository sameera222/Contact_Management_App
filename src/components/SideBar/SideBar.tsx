import contact from "../../utils/contact-book.png";
import bar from "../../utils/bar-chart.png";
import { Link } from "react-router-dom";


export default function Sidebar() {
  return (
    <div className="md:flex md:flex-col flex-row  border-r-6  h-18">
  <div className="md:flex pt-16 md:flex-col flex-row md:h-screen h-18 p-3 bg-white shadow md:w-60 w-full">
    <div className="space-y-3">
      <div className="md:flex-1">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li className="rounded-sm">
            <Link
              to="/"
              className="flex md:flex-row items-center p-2 space-x-3 rounded-md"
            >
              <img src={contact} alt="contact" />
              <span>Contacts</span>
            </Link>
          </li>
          <li className="rounded-sm">
            <Link
              to="/dashboard"
              className="flex md:flex-row items-center p-2 space-x-3 rounded-md"
            >
              <img src={bar} alt="" />
              <span>Charts And Maps</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

    // <div className="md:flex border-r-2  h-18">
    //   <div className="md:flex pt-16 flex-col md:h-screen h-18 p-3 bg-white shadow w-full  md:w-60">
    //     <div className="space-y-3">
    //       <div className="flex-1">
    //         <ul className="pt-2 pb-4 space-y-1 text-sm">
    //           <li className="rounded-sm">
    //             <Link
    //               to="/"
    //               className="flex items-center p-2 space-x-3 rounded-md"
    //             >
    //               <img src={contact} alt="contact" />
    //               <span>Contacts</span>
    //             </Link>
    //           </li>
    //           <li className="rounded-sm">
    //             <Link
    //               to="/dashboard"
    //               className="flex items-center p-2 space-x-3 rounded-md"
    //             >
    //               <img src={bar} alt="" />
    //               <span>Charts And Maps</span>
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
