import React from 'react'

function ServiceModal({ close, title }) {
  return (
    <div id="popup-service-modal" tabIndex={-1} className="hidden form-font fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full justify-center bg-opacity-50 items-center bg-gray-900">
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div id="add-category-modal" className="relative bg-white rounded-lg shadow">
          <div className="px-4 flex justify-between items-center">
            <div className="uppercase font-sans text-xl font-semibold text-[#002848]">{title}</div>
            <button className="px-2 py-2" >
              <i className="items-center fa-solid fa-xmark text-2xl text-slate-400 hover:text-slate-600" onClick={close} />
            </button>
          </div>
          <hr />
          <div className="px-4 py-2">
            <div className="font-roboto font-semibold text-[#002848]">With the watchword of commitment, we provide services related to:</div>
          </div>
          <hr />
          <div className="px-4 py-2 flex justify-end space-x-2">
            <button className="px-4 py-2 rounded text-white bg-gray-600 hover:bg-gray-700 text-[13px] sm:text-base" onClick={close}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceModal
