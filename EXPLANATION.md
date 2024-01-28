# Time frame (approximate)

* 10-20 mins to understand the README and explore the codebase.
* 20 mins to implement the math methods and pass the tests.
* 20-30 mins to do a refresher on Express.
* 20 mins to design and implement the endpoints.
* 10-20 mins to clean things up and documenting.

Total estimated time: 80-100 minutes.

# Decisions

Got rid of `httpRouter` util because it's not used in the end. The handlers are different enough and need better access
to the request and reponse objects.

Each function is a path under `/math` (as opposed to a param on the path or body) for better "visibility" to devs and to
clients (if we use something like swagger).

Use `GET` instead of `POST`. Was on the fence. Could go with either to be honest but chose `GET` because it's slightly
simpler to hit from curl to test. `GET` also might be arguably more correct in terms of REST semantics.

# Closing
Thanks for reading and reviewing the code. I'd be more than happy to discuss any other questions or concerns you have.
