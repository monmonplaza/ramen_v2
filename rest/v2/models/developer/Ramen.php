<?php
class Ramen
{
    public $ramen_aid;
    public $ramen_title;
    public $ramen_price;
    public $ramen_description;
    public $ramen_category;
    public $ramen_photo;
    public $ramen_is_active;
    public $ramen_datetime;
    public $ramen_created;

    public $connection;
    public $lastInsertedId;

    public $tblramen;

    public $ramen_start;
    public $ramen_total;
    public $ramen_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblramen = "ramen_ramen";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblramen} ";
            $sql .= "( ramen_title, ";
            $sql .= "ramen_is_active, ";
            $sql .= "ramen_price, ";
            $sql .= "ramen_description, ";
            $sql .= "ramen_category, ";
            $sql .= "ramen_photo, ";
            $sql .= "ramen_datetime, ";
            $sql .= "ramen_created ) values ( ";
            $sql .= ":ramen_title, ";
            $sql .= ":ramen_is_active, ";
            $sql .= ":ramen_price, ";
            $sql .= ":ramen_description, ";
            $sql .= ":ramen_category, ";
            $sql .= ":ramen_photo, ";
            $sql .= ":ramen_datetime, ";
            $sql .= ":ramen_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ramen_title" => $this->ramen_title,
                "ramen_is_active" => $this->ramen_is_active,
                "ramen_price" => $this->ramen_price,
                "ramen_description" => $this->ramen_description,
                "ramen_category" => $this->ramen_category,
                "ramen_photo" => $this->ramen_photo,
                "ramen_datetime" => $this->ramen_datetime,
                "ramen_created" => $this->ramen_created,
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
            $sql = "select * from {$this->tblramen} ";
            $sql .= "order by ramen_is_active desc, ";
            $sql .= "ramen_title asc ";
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
            $sql = "select * from {$this->tblramen} ";
            $sql .= "order by ramen_is_active desc, ";
            $sql .= "ramen_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->ramen_start - 1,
                "total" => $this->ramen_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tblramen} ";
            $sql .= "where ramen_title like :ramen_title ";
            $sql .= "order by ramen_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ramen_title" => "%{$this->ramen_search}%",
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
            $sql = "select * from {$this->tblramen} ";
            $sql .= "where ramen_aid  = :ramen_aid ";
            $sql .= "order by ramen_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ramen_aid" => $this->ramen_aid,
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
            $sql = "update {$this->tblramen} set ";
            $sql .= "ramen_title = :ramen_title, ";
            $sql .= "ramen_price = :ramen_price, ";
            $sql .= "ramen_description = :ramen_description, ";
            $sql .= "ramen_category = :ramen_category, ";
            $sql .= "ramen_photo = :ramen_photo, ";
            $sql .= "ramen_datetime = :ramen_datetime ";
            $sql .= "where ramen_aid = :ramen_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ramen_title" => $this->ramen_title,
                "ramen_price" => $this->ramen_price,
                "ramen_description" => $this->ramen_description,
                "ramen_category" => $this->ramen_category,
                "ramen_photo" => $this->ramen_photo,
                "ramen_datetime" => $this->ramen_datetime,
                "ramen_aid" => $this->ramen_aid,
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
            $sql = "update {$this->tblramen} set ";
            $sql .= "ramen_is_active = :ramen_is_active, ";
            $sql .= "ramen_datetime = :ramen_datetime ";
            $sql .= "where ramen_aid = :ramen_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ramen_is_active" => $this->ramen_is_active,
                "ramen_datetime" => $this->ramen_datetime,
                "ramen_aid" => $this->ramen_aid,
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
            $sql = "delete from {$this->tblramen} ";
            $sql .= "where ramen_aid = :ramen_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ramen_aid" => $this->ramen_aid,
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
            $sql = "select ramen_title from {$this->tblramen} ";
            $sql .= "where ramen_title = :ramen_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ramen_title" => "{$this->ramen_title}",
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
    //         $sql = "select product_ramen_id from {$this->tblramen} ";
    //         $sql .= "where product_ramen_id = :product_ramen_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_ramen_id" => $this->ramen_aid,
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
            $sql .= "from {$this->tblramen} ";
            $sql .= "where ramen_is_active = :ramen_is_active  ";
            $sql .= "order by ramen_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ramen_is_active" => $this->ramen_is_active,
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
            $sql .= "from {$this->tblramen} ";
            $sql .= "where ";
            $sql .= "ramen_is_active = :ramen_is_active ";
            $sql .= "and ramen_title like :ramen_title ";
            $sql .= "order by ramen_is_active desc, ";
            $sql .= "ramen_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ramen_title" => "%{$this->ramen_search}%",
                "ramen_is_active" => $this->ramen_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}