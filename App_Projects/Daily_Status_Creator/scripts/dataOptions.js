export const sectionTemplates = {
    "default": `<div class="form__section">
                    <div class="form__field">
                        <input class="form__input" type="text" name="form__input" placeholder="Enter Ticket Number" />
                    </div>
                </div>`,
    "story-review": `<div class="form__section form__section-group">
                        <!-- <div class="form__radio-group">
                            <label class="form__radio-label">
                                <input class="form__radio-input" type="radio" name="story-review" />
                                <span>Started</span>
                            </label>
                            <label class="form__radio-label">
                                <input class="form__radio-input" type="radio" name="story-review" />
                                <span>Continued</span>
                            </label>
                        </div> -->
                        <select class="form__select-group" name="status-selection">
                            <option value="started">Started</option>
                            <option value="continued">Continued</option>
                            <option value="completed">Completed</option>
                        </select>
                        <div class="form__field">
                            <input class="form__input form__input--group" type="text" name="form__input" placeholder="Enter Ticket Number" />
                        </div>
                    </div>`,
    "mind-maps": `<div class="form__section form__section-group">
                        <select class="form__select-group" name="status-selection">
                            <option value="started">Started</option>
                            <option value="continued">Continued</option>
                            <option value="completed">Completed</option>
                        </select>
                        <div class="form__field">
                            <input class="form__input form__input--group" type="text" name="form__input" placeholder="Enter Ticket Number" />
                        </div>
                    </div>`,
    "test-cases": `<div class="form__section form__section-group">
                        <select class="form__select-group" name="status-selection">
                            <option value="created">Created</option>
                            <option value="edited">Edited</option>
                            <option value="completed">Completed</option>
                        </select>
                        <div class="form__field">
                            <input class="form__input form__input--group" type="text" name="form__input" placeholder="Enter Ticket Number" />
                        </div>
                    </div>`,
    "execution": `<div class="form__section form__section-group">
                        <select class="form__select-group" name="status-selection">
                            <option value="dev">DEV</option>
                            <option value="stage">STAGE</option>
                        </select>
                        <div class="form__field">
                            <input class="form__input form__input--group" type="text" name="form__input" placeholder="Enter Ticket Number" />
                        </div>
                    </div>`,
    "defect-raised": `<div class="form__section">
                        <div class="form__field">
                            <input class="form__input" type="text" name="form__input" placeholder="Enter Ticket Number" />
                        </div>
                    </div>`,
    "regression": `<div class="form__section">
                        <div class="form__field">
                            <input class="form__input" type="text" name="form__input" placeholder="Enter Ticket Number" />
                        </div>
                    </div>`,
    "workflows": `<div class="form__section">
                        <div class="form__field">
                            <input class="form__input" type="text" name="form__input" placeholder="Enter Ticket Number" />
                        </div>
                    </div>`,
    "automation": `<div class="form__section form__section-group">
                        <select class="form__select-group" name="status-selection">
                            <option value="started">Started</option>
                            <option value="continued">Continued</option>
                            <option value="completed">Completed</option>
                        </select>
                        <div class="form__field">
                            <input class="form__input form__input--group" type="text" name="form__input" placeholder="Enter Test Case Number" />
                        </div>
                    </div>`,
    "hot-fix": `<div class="form__section">
                    <div class="form__field">
                        <input class="form__input" type="text" name="form__input" placeholder="Enter Ticket Number" />
                    </div>
                </div>`,
    "mini-update": `<div class="form__section">
                        <div class="form__field">
                            <input class="form__input" type="text" name="form__input" placeholder="Enter Ticket Number" />
                        </div>
                    </div>`,
    "dev-connect": `<div class="form__section">
                        <div class="form__field">
                            <input class="form__input" type="text" name="form__input" placeholder="Enter Ticket Number" />
                        </div>
                    </div>`,
    "sanity-test": `<div class="form__section">
                        <select class="form__select-group" name="status-selection">
                            <option value="mpt">MPT</option>
                            <option value="prod">PROD</option>
                        </select>
                    </div>`
};

export const statusOptions = [
    { value: "story-review", text: "Story Review" },
    { value: "mind-maps", text: "Mind Maps" },
    { value: "test-cases", text: "Test Cases" },
    { value: "execution", text: "Execution" },
    { value: "defect-raised", text: "Defect Raised" },
    { value: "regression", text: "Regression" },
    { value: "workflows", text: "Workflows" },
    { value: "automation", text: "Automation" },
    { value: "hot-fix", text: "Hot-Fix" },
    { value: "mini-update", text: "Mini-Update" },
    { value: "dev-connect", text: "DEV Team Connect" },
    { value: "sanity-test", text: "Sanity Test" }
];