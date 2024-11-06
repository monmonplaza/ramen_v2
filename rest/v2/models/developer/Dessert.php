<?php
class Dessert
{
    public $dessert_aid;
    public $dessert_title;
    public $dessert_price;
    public $dessert_description;
    public $dessert_is_active;
    public $dessert_datetime;
    public $dessert_created;

    public $connection;
    public $lastInsertedId;

    public $tbldessert;

    public $dessert_start;
    public $dessert_total;
    public $dessert_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tbldessert = "ramen_dessert";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tbldessert} ";
            $sql .= "( dessert_title, ";
            $sql .= "dessert_is_active, ";
            $sql .= "dessert_price, ";
            $sql .= "dessert_description, ";
            $sql .= "dessert_datetime, ";
            $sql .= "dessert_created ) values ( ";
            $sql .= ":dessert_title, ";
            $sql .= ":dessert_is_active, ";
            $sql .= ":dessert_price, ";
            $sql .= ":dessert_description, ";
            $sql .= ":dessert_datetime, ";
            $sql .= ":dessert_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "dessert_title" => $this->dessert_title,
                "dessert_is_active" => $this->dessert_is_active,
                "dessert_price" => $this->dessert_price,
                "dessert_description" => $this->dessert_description,
                "dessert_datetime" => $this->dessert_datetime,
                "dessert_created" => $this->dessert_created,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select * from {$this->tbldessert} ";
            $sql .= "order by dessert_is_active desc, ";
            $sql .= "dessert_title asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select * from {$this->tbldessert} ";
            $sql .= "order by dessert_is_active desc, ";
            $sql .= "dessert_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->dessert_start - 1,
                "total" => $this->dessert_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tbldessert} ";
            $sql .= "where dessert_title like :dessert_title ";
            $sql .= "order by dessert_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "dessert_title" => "%{$this->dessert_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tbldessert} ";
            $sql .= "where dessert_aid  = :dessert_aid ";
            $sql .= "order by dessert_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "dessert_aid" => $this->dessert_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tbldessert} set ";
            $sql .= "dessert_title = :dessert_title, ";
            $sql .= "dessert_price = :dessert_price, ";
            $sql .= "dessert_description = :dessert_description, ";
            $sql .= "dessert_datetime = :dessert_datetime ";
            $sql .= "where dessert_aid = :dessert_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "dessert_title" => $this->dessert_title,
                "dessert_price" => $this->dessert_price,
                "dessert_description" => $this->dessert_description,
                "dessert_datetime" => $this->dessert_datetime,
                "dessert_aid" => $this->dessert_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tbldessert} set ";
            $sql .= "dessert_is_active = :dessert_is_active, ";
            $sql .= "dessert_datetime = :dessert_datetime ";
            $sql .= "where dessert_aid = :dessert_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "dessert_is_active" => $this->dessert_is_active,
                "dessert_datetime" => $this->dessert_datetime,
                "dessert_aid" => $this->dessert_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tbldessert} ";
            $sql .= "where dessert_aid = :dessert_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "dessert_aid" => $this->dessert_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // name
    public function checkName()
    {
        try {
            $sql = "select dessert_title from {$this->tbldessert} ";
            $sql .= "where dessert_title = :dessert_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "dessert_title" => "{$this->dessert_title}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // // name
    // public function checkAssociation()
    // {
    //     try {
    //         $sql = "select product_dessert_id from {$this->tbldessert} ";
    //         $sql .= "where product_dessert_id = :product_dessert_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_dessert_id" => $this->dessert_aid,
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }


    public function filterByStatus()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tbldessert} ";
            $sql .= "where dessert_is_active = :dessert_is_active  ";
            $sql .= "order by dessert_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "dessert_is_active" => $this->dessert_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByStatusAndSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tbldessert} ";
            $sql .= "where ";
            $sql .= "dessert_is_active = :dessert_is_active ";
            $sql .= "and dessert_title like :dessert_title ";
            $sql .= "order by dessert_is_active desc, ";
            $sql .= "dessert_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "dessert_title" => "%{$this->dessert_search}%",
                "dessert_is_active" => $this->dessert_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}