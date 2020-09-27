import uvicorn
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from starlette.templating import Jinja2Templates
from  nosleepToEpub.serializers import ApiEpubInterface


app = FastAPI()
app.mount("/static", StaticFiles(directory="/code/frontend/build/static"), name="static")
app.mount("/static", StaticFiles(directory="/code/frontend/"), name="static")
templates = Jinja2Templates(directory="/code/frontend/build")

@app.get("/", response_class=HTMLResponse)
async def index(request:Request):
    return templates.TemplateResponse("index.html", {"request":request,})



@app.post("/generate")
async def generate(item: ApiEpubInterface):
    pass

@app.get("/stream/{post_id}")
async def stream(request:Request):
    pass

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8080, reload=True)
# from uuid import uuid4
# from rq import Queue
# from worker import conn
#
#
# app = Flask(__name__, static_folder="./frontend/build/")
# app.config.from_object("nosleepToEpub.config.DevelopmentConfig",)
# app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# db = SQLAlchemy(app)
# migrate = Migrate(app, db)
#
# q = Queue(connection=conn)

# @app.route("/generate/", methods=["POST"])
# def generate():
#     """
#         Endpoint for processing the data sent from the frontend
#     """
#     from nosleepToEpub.processors.LinkProcessor import LinkProcessor
#
#     # EpubEntry()
#     possible_uuid = uuid4()
#     processor = LinkProcessor(data=request.json, model_uuid=str(possible_uuid))
#     q.enqueue_call(processor.start)
#     return make_response(str(possible_uuid), 201)
#
#
# @app.route("/stream/<book_id>/")
# def stream(book_id):
#     p = conn.pubsub()
#     p.psubscribe(book_id)
#
#     def progress_notifications(p):
#         should_print = True
#
#         while should_print:
#             message = p.get_message()
#             if message:
#                 status = message["data"]
#             else:
#                 status = "NO_MESSAGES".encode("utf-8")
#
#             if status in [b"NO_MESSAGES", b"BOOK_READY_FOR_DOWNLOAD"]:
#                 should_print = False
#             print(status, type(status))
#             yield bytes(status)
#
#     p.unsubscribe()
#     return Response(progress_notifications(p), mimetype="text/event-stream")
#
#
# if __name__ == "__main__":
#     app.run()
