import React from 'react'
export default function EmptyData() {
  return (
    <div className="w-full max-w-md flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white p-8 text-center shadow-sm transition-colors">
        <div className="mb-4 rounded-full bg-gray-100 p-3 text-gray-500">
    </div>
    <h3 className="text-lg font-semibold text-gray-800">
      Sin información disponible
    </h3>
    <p className="mt-1 text-sm text-gray-500">
      Actualmente no hay datos en esta sección. Los nuevos elementos aparecerán aquí cuando estén creados.
    </p>
  </div>

  )
}
