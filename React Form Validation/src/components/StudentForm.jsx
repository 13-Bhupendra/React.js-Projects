import { useFormik } from "formik";
import { string, object } from "yup";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  grade: "",
  gender : null
};

// console.log(initialValues);

const StudentFormSchema = object({
  fullName: string()
    .required("*Full name is required")
    .min(8, "*Name must be 8 charaters long"),

  email: string().required("*Email is required").email("*Invalid email"),

  password: string()
    .required("*Password is required")
    .min(8, "*Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[A-Z]/, "Password requires a Uppercase letter")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[^\w]/, "Password requires a Symbol"),
    
  grade: string().required("*Grade is required"),

  gender : string().required("*Select gender is required")
});

export default function StudentForm() {
  const handleStudentFrom = useFormik({
    initialValues,
    validationSchema: StudentFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // console.log(handleStudentFrom);

  return (
    <>
      <div>
        <h1>Student Form</h1>
        <form onSubmit={handleStudentFrom.handleSubmit}>
          <section>
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={handleStudentFrom.values.fullName}
              onChange={handleStudentFrom.handleChange}
              onBlur={handleStudentFrom.handleBlur}
            />

            {handleStudentFrom.touched.fullName &&
              handleStudentFrom.errors.fullName && (
                <p style={{ color: "red" }}>
                  {handleStudentFrom.errors.fullName}
                </p>
              )}
          </section>

          <section>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={handleStudentFrom.values.email}
              onChange={handleStudentFrom.handleChange}
              onBlur={handleStudentFrom.handleBlur}
            />
            {handleStudentFrom.touched.email &&
              handleStudentFrom.errors.email && (
                <p style={{ color: "red" }}>{handleStudentFrom.errors.email}</p>
              )}
          </section>

          <section>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={handleStudentFrom.values.password}
              onChange={handleStudentFrom.handleChange}
              onBlur={handleStudentFrom.handleBlur}
            />
            {handleStudentFrom.touched.password &&
              handleStudentFrom.errors.password && (
                <p style={{ color: "red" }}>
                  {handleStudentFrom.errors.password}
                </p>
              )}
          </section>

          <section>
            <label htmlFor="">Grade</label>
            <select
              name="grade"
              value={handleStudentFrom.values.grade}
              onChange={handleStudentFrom.handleChange}
              onBlur={handleStudentFrom.handleBlur}
            >
              <option value="">Select your grade</option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </select>
            {handleStudentFrom.touched.grade &&
              handleStudentFrom.errors.grade && (
                <p style={{ color: "red" }}>{handleStudentFrom.errors.grade}</p>
              )}
          </section>

          <fieldset onChange={handleStudentFrom.handleChange} onBlur={handleStudentFrom.onBlur } value={handleStudentFrom.values.gender}>
            <legend>Select your gender</legend>

            <input type="radio" name="gender" value="male" id="male" />
            <label for="male">Male</label> <br />

            <input type="radio" name="gender" value="female" id="female" />
            <label for="female">Female</label> <br />

            <input type="radio" name="gender" value="other" id="other" />
            <label for="other">Other</label>
          </fieldset>
            {handleStudentFrom.touched.gender && handleStudentFrom.errors.gender && (<p style={{color:"red"}}>{handleStudentFrom.errors.gender}</p>)}

              <br />

          <input type="submit"/>
        </form>
      </div>
    </>
  );
}
