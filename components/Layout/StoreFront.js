

import Renderinfo from "../FrontPages/Renderinfo"
import Carlist from "../FrontPages/Carlist"


export default function StoreFront({ product }) {
  return (
    <div>
      <div className="">

        {/* slider div */}
        <div className="mt-[60px]">
          <Renderinfo />

          <Carlist product={product} />


        </div>

      </div>
    </div>
  )
}
