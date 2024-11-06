import { Archive, ArchiveRestore, FilePenLine, Plus, Search, Trash } from 'lucide-react'
import React from 'react'
import LoaderTable from '../partials/LoaderTable'
import NoData from '../partials/icons/NoData'
import ServerError from '../partials/icons/ServerError'
import SpinnerTable from '../partials/spinners/SpinnerTable'

const DrinksTable = () => {
  return (
    <div className="m-8">
    <div className="flex justify-between items-center">
      <form action="">
        <div className="input-wrap relative">
          <input
            type="text"
            placeholder="keyword"
            className="bg-primary px-2 py-1 placeholder:opacity-30 outline-none border border-transparent focus:border-accent !pl-8 rounded-md !text-dark"
          />
          <Search
            className="absolute top-2 left-1.5 opacity-25"
            size={20}
          />
        </div>
      </form>
      <button className="btn btn-accent" >
        <Plus size={14} /> Add New
      </button>
    </div>

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
                true
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
  </div>
  )
}

export default DrinksTable