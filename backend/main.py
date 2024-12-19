from flask import Flask, request, jsonify
from config import app, db
from models import Contact


# creating route for getting all contacts
@app.route("/contacts", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    json_contacts = list(map(lambda x: x.to_json(), contacts))
    return jsonify({"contacts": json_contacts})
# creating route for creating a contact


@app.route("/create_contact", methods=["POST"])
def create_contact():
    first_name = request.json.get("first_name")
    last_name = request.json.get("last_name")
    email = request.json.get("email")
    
    if not first_name or not last_name or not email:
        return (
            jsonify({"error": "Missing required fields"}), 400,
        )
    new_contact = Contact(first_name=first_name, last_name=last_name, email=email)
    try:
        db.session.add(new_contact)
        db.session.commit()
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
    return jsonify({"message": "Contact created successfully"}), 201


# creating route for updating a contact
@app.route("/update_contact/<int:uset_id>")
def update_contact(user_id):
    contact = Contact.query.get(user_id)
    if not contact:
        return jsonify({"error": "Contact not found"}), 404
        data = request.json
        contact.first_name = data.get("first_name", contact.first_name)
        contact.last_name = data.get("last_name", contact.last_name)
        contact.email = data.get("email", contact.email)

        db.session.commit()

        return jsonify({"message": "Contact updated successfully"}), 200
# creating route for deleting a contact
@app.route("/delete_contact/<int:user_id>", methods=["DELETE"])
def delete_contact(user_id):
    contact = contact.query.get(user_id)
    if not contact:
        return jsonify({"error": "Contact not found"}), 404

    db.session.delete(contact)
    db.session.commit()

    return jsonify({"message": "Contact deleted successfully"}), 200





if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)