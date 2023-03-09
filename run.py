from app import app, db
# from waitress import serve
from app import app


if __name__ == "__main__":
    db.create_all()
    app.run(port=8000, debug=True)
    # serve(app, host='0.0.0.0', port=8080)