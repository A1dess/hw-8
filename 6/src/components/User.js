
export function User ({name, index, deleteElement}) {

    const deleteUser = () => {
       deleteElement(index)
    }


    return (
        <div>
          <span>{name}</span>
          <button onClick={deleteUser}>delete</button>
        </div>
    )
}