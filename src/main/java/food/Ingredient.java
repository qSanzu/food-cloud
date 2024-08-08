package food;

import lombok.Data;

@Data
public class Ingredient {
    private final int id;
    private final String name;
    private final String type;

    public enum Type {
        WRAP, VEGGIES, CHEESE, SAUCE
    }
}
