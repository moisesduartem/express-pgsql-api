const pool = require("./../db/db");

module.exports = {
    // List all users
    index(request, response) {
        pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
            if (error) throw error;
            response.status(200).json(results.rows);
        });
    },
    // Shows a specfic user passing a id
    show(request, response) {
        const id = parseInt(request.params.id);

        pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
            if (error) throw error;
            response.status(200).json(results.rows);
        });
    },
    //Create a new user
    store(request, response) {
        const { name, email } = request.body;
        pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email], (error, result) => {
            if (error) throw error;
            response.status(201).send("User created successfully! :)");
        });
    },
    // Update user data
    update(request, response) {
        const id = parseInt(request.params.id);
        const { name, email } = request.body;

        pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [name, email, id], (error, results) => {
            if (error) throw error;
            response.status(200).send(`User modified with ID: ${id}`);
        });
    },
    // Delete user
    destroy(request, response) {
        const id = parseInt(request.params.id);

        pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
            if (error) throw error;
            response.status(200).send(`User delete with ID: ${id}`);
        });
    }
}