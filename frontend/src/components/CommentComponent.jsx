/* eslint-disable react/prop-types */
const CommentComponent = ({children}) => {
    return (
        <div className="card mx-3 my-2">
            <div className="card-header">
                <img src="/src/assets/male.png" style={{ width: "1rem" }} />
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

export default CommentComponent;
