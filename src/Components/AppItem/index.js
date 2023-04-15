import "./index.css";

const AppItem=(props)=>{
    const {app}=props;
    const {appName}=app;
    return(
        <div className="app-card">
            <p>{appName}</p>
        </div>
    )
}

export default AppItem;