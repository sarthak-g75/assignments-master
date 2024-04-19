// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://testDb_owner:ZHcAv53bftTQ@ep-purple-wood-a1t9hnhc.ap-southeast-1.aws.neon.tech/testDb?sslmode=require"
})


async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
    
    
    CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
    `)
    console.log(result)
}
// const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
async function enterUser(){
    await client.connect()
    const query  =` SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
    FROM users
    JOIN addresses ON users.id = addresses.user_id
    WHERE users.id = '2';`
    // const values = 'gsarthak0987@gmail.com'
    const result = await client.query(query)
        console.log(result)
}

// createUsersTable();
enterUser();