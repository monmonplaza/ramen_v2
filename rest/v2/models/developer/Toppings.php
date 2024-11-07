<?php
class Toppings
{
    public $toppings_aid;
    public $toppings_title;
    public $toppings_price;
    public $toppings_description;
    public $toppings_is_active;
    public $toppings_datetime;
    public $toppings_created;

    public $connection;
    public $lastInsertedId;

    public $tbltoppings;

    public $toppings_start;
    public $toppings_total;
    public $toppings_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tbltoppings = "ramen_toppings";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tbltoppings} ";
            $sql .= "( toppings_title, ";
            $sql .= "toppings_is_active, ";
            $sql .= "toppings_price, ";
            $sql .= "toppings_description, ";
            $sql .= "toppings_datetime, ";
            $sql .= "toppings_created ) values ( ";
            $sql .= ":toppings_title, ";
            $sql .= ":toppings_is_active, ";
            $sql .= ":toppings_price, ";
            $sql .= ":toppings_description, ";
            $sql .= ":toppings_datetime, ";
            $sql .= ":toppings_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "toppings_title" => $this->toppings_title,
                "toppings_is_active" => $this->toppings_is_active,
                "toppings_price" => $this->toppings_price,
                "toppings_description" => $this->toppings_description,
                "toppings_datetime" => $this->toppings_datetime,
                "toppings_created" => $this->toppings_created,
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
            $sql = "select * from {$this->tbltoppings} ";
            $sql .= "order by toppings_is_active desc, ";
            $sql .= "toppings_title asc ";
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
            $sql = "select * from {$this->tbltoppings} ";
            $sql .= "order by toppings_is_active desc, ";
            $sql .= "toppings_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->toppings_start - 1,
                "total" => $this->toppings_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tbltoppings} ";
            $sql .= "where toppings_title like :toppings_title ";
            $sql .= "order by toppings_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "toppings_title" => "%{$this->toppings_search}%",
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
            $sql = "select * from {$this->tbltoppings} ";
            $sql .= "where toppings_aid  = :toppings_aid ";
            $sql .= "order by toppings_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "toppings_aid" => $this->toppings_aid,
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
            $sql = "update {$this->tbltoppings} set ";
            $sql .= "toppings_title = :toppings_title, ";
            $sql .= "toppings_price = :toppings_price, ";
            $sql .= "toppings_description = :toppings_description, ";
            $sql .= "toppings_datetime = :toppings_datetime ";
            $sql .= "where toppings_aid = :toppings_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "toppings_title" => $this->toppings_title,
                "toppings_price" => $this->toppings_price,
                "toppings_description" => $this->toppings_description,
                "toppings_datetime" => $this->toppings_datetime,
                "toppings_aid" => $this->toppings_aid,
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
            $sql = "update {$this->tbltoppings} set ";
            $sql .= "toppings_is_active = :toppings_is_active, ";
            $sql .= "toppings_datetime = :toppings_datetime ";
            $sql .= "where toppings_aid = :toppings_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "toppings_is_active" => $this->toppings_is_active,
                "toppings_datetime" => $this->toppings_datetime,
                "toppings_aid" => $this->toppings_aid,
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
            $sql = "delete from {$this->tbltoppings} ";
            $sql .= "where toppings_aid = :toppings_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "toppings_aid" => $this->toppings_aid,
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
            $sql = "select toppings_title from {$this->tbltoppings} ";
            $sql .= "where toppings_title = :toppings_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "toppings_title" => "{$this->toppings_title}",
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
    //         $sql = "select product_toppings_id from {$this->tbltoppings} ";
    //         $sql .= "where product_toppings_id = :product_toppings_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_toppings_id" => $this->toppings_aid,
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
            $sql .= "from {$this->tbltoppings} ";
            $sql .= "where toppings_is_active = :toppings_is_active  ";
            $sql .= "order by toppings_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "toppings_is_active" => $this->toppings_is_active,
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
            $sql .= "from {$this->tbltoppings} ";
            $sql .= "where ";
            $sql .= "toppings_is_active = :toppings_is_active ";
            $sql .= "and toppings_title like :toppings_title ";
            $sql .= "order by toppings_is_active desc, ";
            $sql .= "toppings_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "toppings_title" => "%{$this->toppings_search}%",
                "toppings_is_active" => $this->toppings_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}