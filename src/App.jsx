import { useState } from "react"
import LifeCycleInCbc from "./Day 5/lifeCycle/LifeCycleInCbc"
import LifeCycleInFbc from "./Day 5/lifeCycle/LifeCycleInFbc"
import Child from "./Day 1/Props/Child"
import Parent from "./Day 1/Props/Parent"
// import GrandParent from "./Day 2/propsDrilling/propsDrilling/GrandParent"
import PropsAss from "./Day 2/propsDrilling/propsAssesment/PropsAss"
import StateInFbc from "./Day 3/state/StateInFbc"
import Cbc from "./Day 4/Component/Cbc"
import Fbc from "./Day 4/Component/Fbc"
import PropsDrillParent from "./Day 6/DrillingAssessment/PropsDrillParent"
import PropsParent from "./Day 6/DrillingAssessment/PropsParent"
import FetchData from "./Day 7/Task1/FetchData"
import ConditionalRendering1 from "./Day 7/conditionalRendering/ConditionalRendering1"
import ConditionalRendering2 from "./Day 7/conditionalRendering/ConditionalRendering2"
import ConditionalRendering3 from "./Day 7/conditionalRendering/ConditionalRendering3"
// import InlineCSS from "./Day 8/CSS/InlineCSS"
// import InternalCSS from "./Day 8/CSS/InternalCSS"
// import ExternalCSS from "./Day 8/CSS/ExternalCSS"
// import Button from "./Day 8/CSS/moduleCSS/Button"
// import Netlify from "./Day 8/Task/netlify"
// import Startup from "./Day 8/Task/Startup"
// import John from "./Day 9/Task/John"
import TaskFbc from "./Day 10/Mock/TaskFbc"
import DefaultPropsParent from "./Day 11/defaultProps/DefaultPropsParent"
import ContextParent from "./Day 11/contextApi1/ContextParent"
import ContextApiParent from "./Day 11/contextApi2/ContextApiParent"
import Component1 from "./Day 11/Task/Component1"
import GrandParent from "./Day 11/contextApi3/GrandParent"
import Controlled from "./Day 12/form/Controlled"
import UnControlled from "./Day 12/form/UnControlled"
import ReactMemoParent from "./Day 12/memoization/ReactMemo/ReactMemoParent"
import UseMemoParent from "./Day 12/memoization/useMemo/UseMemoParent"
import UseCallbackParent from "./Day 12/memoization/useCallback/UseCallbackParent"
import UseReducer2 from "./Day 13/reducer/UseReducer2"
import UseReducer3 from "./Day 13/reducer/UseReducer3"
import UseReducer from "./Day 13/reducer/UseReducer"
import Layout from "./Day 14/useLayoutEffect/Layout"

const App = () => {

    let [toggle, setToggle] = useState(false)

    return (
        <div>
            {/* <Cbc/> */}
            {/* <Fbc/>  */}
            {/* <Child/> */}
            {/* <Parent/> */}
            {/* <GrandParent/> */}
            {/* <StateInFbc/> */}
            {/* <PropsAss/> */}
            {/* <LifeCycleInCbc/>  */}

            {/* { toggle ? <LifeCycleInCbc/> : "No component"}
            <button onClick={()=>setToggle(!toggle)}> Set Toggle</button> */}

            {/* { toggle ? <LifeCycleInFbc/> : "No component"}
            <button onClick={()=>setToggle(!toggle)}> Set Toggle</button> */}

            {/* <LifeCycleInFbc/> */}

            {/* <PropsDrillParent/> */}

            {/* <PropsParent/> */}

            {/* <FetchData/> */}

            {/* <ConditionalRendering1/> */}

            {/* <ConditionalRendering2/> */}

            {/* <ConditionalRendering3/> */}

            {/* <InlineCSS/> */}

            {/* <InternalCSS/> */}

            {/* <ExternalCSS/> */}

            {/* <Button/> */}

            {/* <Netlify/> */}

            {/* <Startup/> */}

            {/* <John/> */}

            {/* <TaskFbc/> */}

            {/* <DefaultPropsParent/> */}

            {/* <ContextParent/> */}

            {/* <ContextApiParent/> */}

            {/* <Component1/> */}

            {/* <GrandParent/> */}
        
            {/* <Controlled/> */}

            {/* <UnControlled/> */}

            {/* <ReactMemoParent/> */}

            {/* <UseMemoParent/> */}

            {/* <UseCallbackParent/> */}

            {/* <UseReducer2/> */}

            {/* <UseReducer3/> */} 

            {/* <UseReducer/> */}

            <Layout/>
            
        </div>   
    )
}

export default App