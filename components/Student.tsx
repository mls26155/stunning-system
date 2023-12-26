interface StudentProps {
    name: string;
    age: number;
    isStudent: boolean;
}

const Student = ({ name, age, isStudent }: StudentProps) => {
    return (
      <div className="text-2xl p-2 m-2 border-white border-2">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    )
  }

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student