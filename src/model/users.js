const model = {}
const db = require('../config/configdb')

model.SelectUser = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.users')
            .then((res) => {
                resolve(res.rows)
            })
            .catch((error) => {
                throw(error)
            })
    })
}


model.getByUser = (username) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.users WHERE username = $1', [username])
            .then((res) => {
                resolve(res.rows)
            })
            .catch((er) => {
                reject(er)
            })
    })
}

model.addUser = ({ password, email, username, phone}) => {
    return new Promise((resolve, reject) => {
        db.query(
            `INSERT INTO public.users (password, email, username, phone) VALUES($1, $2, $3, $4);`,
            [password, email, username, phone]
        )
            .then((res) => {
                resolve(`${res.rowCount} user created`)
            })
            .catch((error) => {
                throw(error)
            })
    })
}

model.updateUser = async ({username, phone, email, roles, user_id}) => {
    console.log(username)
    return new Promise ((resolve, reject) => {
        db.query(`UPDATE public.users SET
                username = COALESCE(NULLIF($1, ''), username),
                phone = COALESCE(NULLIF($2, ''), phone),
                email = COALESCE(NULLIF($3, ''), email),
                roles  = COALESCE(NULLIF($4, ''), roles),
                updated_at = now()
                WHERE user_id = $5           
`,
            [username, phone, email, roles, user_id]
            )
        .then((res)=>{
            resolve(res.rows)
        })
        .catch((er)=>{
            console.log(er)
            reject("unexpected output")
        })

    })
}

model.deleteUser = async ({user_id}) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM public.schedules WHERE schedule_id = $1;`, [user_id])
        .then((res) => {
            resolve(res.rows)
        })
        .catch((er) => {
            console.log("There is something wrong with your query")
            reject("unexpected output")
        })
    })

}

model.UpdateStatus = async ({email}) => {
    return new Promise ((resolve, reject) => {
        db.query(`UPDATE public.users 
        SET 
            isVerified = true
        WHERE email = $1`, [email])
        .then((result)=>{
            resolve(result)
        })
        .catch((error)=>{
            console.log(error)
            reject(error)
        })
    })
}



module.exports = model