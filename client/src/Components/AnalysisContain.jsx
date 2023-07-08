import './Analysis.css'

const AnalysisContain =() =>{
    return(
        <div className="container-fluid">
        <div class="card w-75 mb-2 d-flex">
                <div class="card-body">
                    <h5 class="card-title">Analysis </h5>
                    <p class="card-text">Analysis.</p>
                    <a href="#" class="btn btn-primary">Show</a>
                </div>
        </div>

            <div class="card w-75 d-flex">
                <div class="card-body">
                    <h5 class="card-title">Summary</h5>
                    <p class="card-text">Summary</p>
                    <a href="#" class="btn btn-primary">Show</a>
                </div>
            </div>
        </div>
    );
}
export default AnalysisContain;