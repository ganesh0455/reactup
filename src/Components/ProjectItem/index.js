const ProjectItem=(props)=>{
    const {projectDetails}=props;
    const {projectId,category}=projectDetails;
    return(
        <li className="tab-item-container">
            <p>{projectId}{"------------>"}</p>
            <p>{category}</p>
        </li>
    )
}

export default ProjectItem;