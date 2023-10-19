"use server"


export async function createUser(formData) {

    const name = formData.get("name")

    // Validate the form data and save it to the database

    console.log({name})
  }

