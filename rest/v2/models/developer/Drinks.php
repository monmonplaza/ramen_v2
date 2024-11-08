<?php
class Drinks
{
    public $drinks_aid;
    public $drinks_title;
    public $drinks_price;
    public $drinks_description;
    public $drinks_category;
    public $drinks_is_active;
    public $drinks_datetime;
    public $drinks_created;

    public $connection;
    public $lastInsertedId;

    public $tbldrinks;

    public $drinks_start;
    public $drinks_total;
    public $drinks_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tbldrinks = "ramen_drinks";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tbldrinks} ";
            $sql .= "( drinks_title, ";
            $sql .= "drinks_is_active, ";
            $sql .= "drinks_price, ";
            $sql .= "drinks_description, ";
            $sql .= "drinks_category, ";
            $sql .= "drinks_datetime, ";
            $sql .= "drinks_created ) values ( ";
            $sql .= ":drinks_title, ";
            $sql .= ":drinks_is_active, ";
            $sql .= ":drinks_price, ";
            $sql .= ":drinks_description, ";
            $sql .= ":drinks_category, ";
            $sql .= ":drinks_datetime, ";
            $sql .= ":drinks_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "drinks_title" => $this->drinks_title,
                "drinks_is_active" => $this->drinks_is_active,
                "drinks_price" => $this->drinks_price,
                "drinks_description" => $this->drinks_description,
                "drinks_category" => $this->drinks_category,
                "drinks_datetime" => $this->drinks_datetime,
                "drinks_created" => $this->drinks_created,
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
            $sql = "select * from {$this->tbldrinks} ";
            $sql .= "order by drinks_is_active desc, ";
            $sql .= "drinks_title asc ";
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
            $sql = "select * from {$this->tbldrinks} ";
            $sql .= "order by drinks_is_active desc, ";
            $sql .= "drinks_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->drinks_start - 1,
                "total" => $this->drinks_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tbldrinks} ";
            $sql .= "where drinks_title like :drinks_title ";
            $sql .= "order by drinks_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "drinks_title" => "%{$this->drinks_search}%",
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
            $sql = "select * from {$this->tbldrinks} ";
            $sql .= "where drinks_aid  = :drinks_aid ";
            $sql .= "order by drinks_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "drinks_aid" => $this->drinks_aid,
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
            $sql = "update {$this->tbldrinks} set ";
            $sql .= "drinks_title = :drinks_title, ";
            $sql .= "drinks_price = :drinks_price, ";
            $sql .= "drinks_description = :drinks_description, ";
            $sql .= "drinks_category = :drinks_category, ";
            $sql .= "drinks_datetime = :drinks_datetime ";
            $sql .= "where drinks_aid = :drinks_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "drinks_title" => $this->drinks_title,
                "drinks_price" => $this->drinks_price,
                "drinks_description" => $this->drinks_description,
                "drinks_category" => $this->drinks_category,
                "drinks_datetime" => $this->drinks_datetime,
                "drinks_aid" => $this->drinks_aid,
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
            $sql = "update {$this->tbldrinks} set ";
            $sql .= "drinks_is_active = :drinks_is_active, ";
            $sql .= "drinks_datetime = :drinks_datetime ";
            $sql .= "where drinks_aid = :drinks_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "drinks_is_active" => $this->drinks_is_active,
                "drinks_datetime" => $this->drinks_datetime,
                "drinks_aid" => $this->drinks_aid,
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
            $sql = "delete from {$this->tbldrinks} ";
            $sql .= "where drinks_aid = :drinks_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "drinks_aid" => $this->drinks_aid,
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
            $sql = "select drinks_title from {$this->tbldrinks} ";
            $sql .= "where drinks_title = :drinks_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "drinks_title" => "{$this->drinks_title}",
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
    //         $sql = "select product_drinks_id from {$this->tbldrinks} ";
    //         $sql .= "where product_drinks_id = :product_drinks_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_drinks_id" => $this->drinks_aid,
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
            $sql .= "from {$this->tbldrinks} ";
            $sql .= "where drinks_is_active = :drinks_is_active  ";
            $sql .= "order by drinks_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "drinks_is_active" => $this->drinks_is_active,
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
            $sql .= "from {$this->tbldrinks} ";
            $sql .= "where ";
            $sql .= "drinks_is_active = :drinks_is_active ";
            $sql .= "and drinks_title like :drinks_title ";
            $sql .= "order by drinks_is_active desc, ";
            $sql .= "drinks_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "drinks_title" => "%{$this->drinks_search}%",
                "drinks_is_active" => $this->drinks_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}