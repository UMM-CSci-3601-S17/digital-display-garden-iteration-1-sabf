package umm3601.garden;

import com.mongodb.MongoClient;
import com.mongodb.client.*;
import com.mongodb.client.model.Aggregates;
import com.mongodb.client.model.Sorts;
import com.mongodb.util.JSON;
import org.bson.Document;
import org.bson.types.ObjectId;
import java.io.IOException;
import java.util.*;
import java.util.Iterator;

import static com.mongodb.client.model.Filters.*;

public class GardenController {

    private final MongoCollection<Document> gardenCollection;


    public GardenController() throws IOException {

        MongoClient mongoClient = new MongoClient();

        MongoDatabase db = mongoClient.getDatabase("test");

        gardenCollection = db.getCollection("garden");
    }

    public String listPlantsInBed(Map<String, String[]> queryParams, String gardenLocation)
    {
        Document filterDoc = new Document();

        filterDoc = filterDoc.append("gardenLocation", gardenLocation);

        FindIterable<Document> plantsAtLocation = gardenCollection.find(filterDoc);
        //FindIterable<Document> plantsAtLocation = gard: strindenCollection.find();
        return JSON.serialize(plantsAtLocation);
    }

//    public String listBeds()
//    {
//        Document filterDoc = new Document();
//
//        DistinctIterable<String> beds = gardenCollection.distinct("gardenLocation",String.class);
//        //FindIterable<Document> plantsAtLocation = gardenCollection.find();
//        for (String bed: beds) {
//            filterDoc.append(bed,bed);
//        }
//        return filterDoc.toJson();
//    }

    public String displayPlant(Map<String, String[]> queryParams, String plantID)
    {
        Document filterDoc = new Document();

        filterDoc = filterDoc.append("plantID", plantID);

        FindIterable<Document> plantsAtLocation = gardenCollection.find(filterDoc);
        return JSON.serialize(plantsAtLocation);
    }
}
