import './WorkExperience.css'

interface StringArray extends Array<string> {}
  interface WorkData{
    currentWork:string,
    position:String,
    yearStarted:String,
    yearEnd:String,
    textDescription:String,
    stack:string[]
  }

  interface WorkDataType{
    data:WorkData[],
  }
export default function WorkExperience({data}:WorkDataType){
    return<>
    <div id="experience" className="workexperience-container">
        <div className="experience-mobile about-mobile">Experience</div>
    {data && data.map((elem:WorkData)=>{
        return(
    <div className="workexperience-wrapper" key={elem.currentWork}>
        <div className="work-start-end">
            <p>{elem.yearStarted} </p>
            <span></span>
            <p>{elem.yearEnd}</p>
        </div>
        <div className="work-description">

            <div className="work-title">
                <h3>{elem.currentWork}</h3>
                <p>{elem.position}</p>
            </div>
            <div className="work-body">
                <p>{elem.textDescription}</p>
            </div>
            <div className="stack-holder">
            {elem.stack.map((tech: string, index: number) => (
                  <div key={index + "" + tech}>{tech}</div>
                ))}
            </div>
        </div>
    </div>
        )
    })}
            
 </div>
    </>
}