# Skillship Backend Tasks

## Task 1

Create a simple API. Use JSON to data as database.
Th API should have the following routes:

1.  URI: `/`
    Method: `GET`
    Data Params: None
    Url Params: None
    Response:

    ```json
    { "message": "OK" }
    ```

2.  URI: `/fruits`
    Method: `GET`
    Data Params: None
    Url Params: None
    Response:

    ```json
    {
      "kiwi": "🥝",
      "stawberry": "🍓",
      "pinapple": "🍍",
      "pear": "🍐",
      "banana": "🍌",
      "grapes": "🍇"
    }
    ```

3.  URI: `/add-fruit`
    Method: `POST`
    Data Params:

    ```json
    { "pinapple": "🍍" }
    ```

    Url Params: None
    Response:

    ```json
    {
      "kiwi": "🥝",
      "stawberry": "🍓",
      "pinapple": "🍍",
      "pear": "🍐",
      "banana": "🍌",
      "grapes": "🍇",
      "pinapple": "🍍"
    }
    ```

---
