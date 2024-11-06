import React from 'react'
import LoaderTable from '../../partials/LoaderTable'
import NoData from '../../partials/icons/NoData'
import ServerError from '../../partials/icons/ServerError'
import Pill from '../../partials/Pill'
import { Archive, ArchiveRestore, FilePenLine, Trash } from 'lucide-react'
import MopModalAdd from './MopModalAdd'

const Mop = () => {
  return (
    <>
    <section>
    <button className='btn btn-accent'>Add New</button>

    <div className="table_wrapper bg-primary p-4 mt-5 rounded-md relative">
    {/* <SpinnerTable/> */}
    <table>
    <thead>
      <tr>
        <td>#</td>
        <td>Title</td>
        <td>Price</td>
        <td>Category</td>
        <td>Status</td>
        <td></td>
      </tr>
    </thead>

    <tbody>
        <tr>
          <td colSpan="100%">
              <LoaderTable count={30} cols={6} />
              <NoData />
          </td>
        </tr>
        <tr>
          <td colSpan="100%" className="p-10">
            <ServerError />
          </td>
        </tr>
        <tr >
        <td>1. </td>
        <td>Ramen 1 </td>
        <td>200 </td>
        <td>Shoyo Tonkatsu</td>
        <td>
            <Pill isActive={true}/>
        </td>
        <td>
            <ul className="table-action">
            <li>
                <button
                    type="button"
                    data-tooltip="Edit"
                >
                    <FilePenLine size={14} />
                </button>
            </li>
            <li>
                <button
                    type="button"
                    data-tooltip="Archive"
                >
                    <Archive size={14} />
                </button>
            </li>
            <li>  
                <button
                    type="button"
                    data-tooltip="Restore"
                >
                    <ArchiveRestore size={14} />
                </button>
            </li>
            <li> 
                <button
                    type="button"
                    data-tooltip="Delete"
                >
                    <Trash size={14} />
                </button>
            </li>
            </ul>
        </td>
        </tr>
    </tbody>
  </table>
</div>
</section>
{/* <MopModalAdd/> */}
</>
  )
}

export default Mop